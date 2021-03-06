import React, { useContext, useState } from "react";
import { Pencil, XCircle } from "react-bootstrap-icons";
import Modal from "./Modal";
import RenameProject from "./RenameProject";
import { TodoContext } from "../../context";
import firebase from "../../firebase";
import { useTransition, useSpring, animated } from "react-spring";
import { useAuth } from "../../context/AuthContext";

function Project({ project, edit }) {
  const { defaultProject, selectedProject, setSelectedProject } =
    useContext(TodoContext);

  const [showModal, setShowModal] = useState(false);
  const { currentUser } = useAuth();

  const deleteProject = (project) => {
    firebase
      .firestore()
      .collection("projects")
      .doc(project.id)
      .delete()
      .then(() => {
        firebase
          .firestore()
          .collection("todos")
          .where("projectName", "==", project.name)
          .where("userId", "==", currentUser.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
      })
      .then(() => {
        if (selectedProject === project.name) {
          setSelectedProject(defaultProject);
        }
      });
  };

  const fadeIn = useSpring({
    from: { marginTop: "-12px", opacity: 0 },
    to: { marginTop: "0px", opacity: 1 },
  });

  const btnTransitions = useTransition(edit, {
    from: { opacity: 0, right: "-20px" },
    enter: { opacity: 1, right: "00px" },
    leave: { opacity: 0, right: "-20px" },
  });

  return (
    <animated.div style={fadeIn} className="Project">
      <div className="name" onClick={() => setSelectedProject(project.name)}>
        {project.name}
      </div>
      <div className="btns">
        {btnTransitions((props, editProject) =>
          editProject ? (
            <animated.div style={props} className="edit-delete">
              <span className="edit" onClick={() => setShowModal(true)}>
                <Pencil size="10" />
              </span>
              <span className="delete" onClick={() => deleteProject(project)}>
                <XCircle size="13" />
              </span>
            </animated.div>
          ) : project.numOfTodos === 0 ? (
            ""
          ) : (
            <animated.div style={props} className="total-todos">
              {project.numOfTodos}
            </animated.div>
          )
        )}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </animated.div>
  );
}

export default Project;
