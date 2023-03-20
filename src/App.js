import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [boxList, setBoxList] = useState([
    { id: 1, name: "ENG1012", unitTitle: "Engineering design", unitInfo: "This unit covers the engineering design process, which is a method used by engineers from all disciplines to determine a solution to a problem or address a need. You will use design thinking models to define the problem, create innovative conceptual designs, prototype possible design solutions, refine several designs to a single final design, and determine the specifications of the final design. In order to simulate a real-world experience, you are required to determine the role of the stakeholders in the project, and consider the economic, environmental, Indigenous, social and ethical aspects of your proposal.You will be working in a team throughout the semester to gain the communication skills which are highly desired by industries. You will be required to reflect on your work to help improve your interpersonal and teamwork skills contributing to your personal growth. You will also consider the value of engineering ethics and the Code of Ethics whilst learning the engineering design process. Engineers need to submit proposals and pitch their ideas to stakeholders within communities and their team members. They will give presentations to their peers, to their project managers, and to possible stakeholders to develop these presentation skills.On completion of this unit, you should be able to participate in multidisciplinary conversations about the engineering design process.", boxId: 1 },
    { id: 2, name: "PHS1001", unitTitle: "Foundation physics*", unitInfo: "The unit introduces fundamental principles of Newtonian mechanics, electricity and magnetism, waves and oscillations, and quantum physics. The unit explores these concepts in the context of current technology in areas such as transportation and communication. You will also discover how these ideas link to current research in Physics. The unit further introduces the concepts of experimental design, measurement, and analysis that form the basis of the evidence-based approach that is the foundation of scientific discoveries and theories.", boxId: 2 },
    { id: 3, name: "ENG1090", unitTitle: "Foundation mathematics*", unitInfo: "Functions and coordinate geometry: types of functions, composite functions, inverse functions, modelling of periodic phenomena with trigonometric functions. Complex numbers. Differentiation and integration: concepts and techniques, applications to related rate of change and optimisation problems, areas, volume, and centre of mass. Vectors in two- and three-dimensional space, application to motion and kinematics.", boxId: 3 },
    { id: 4, name: "ENG1013", unitTitle: "Engineering smart systems", unitInfo: "Smart systems are critical to the future of engineering. This unit will introduce the fundamentals required for these systems from the perspective of software, electrical, electronic and mechatronics engineering. Theory underpinning systems approach, analogue and digital circuit design and Python programming will be presented.The fundamental stages in the software and hardware development life cycle will be introduced, including requirements analysis, functional analysis, design integration and verification.Concepts such as Boolean Logic, Ohm’s and Kirchhoff’s Laws, Nodal Analysis and Thevenin Equivalence will also be introduced. These will be used to analyse and design solutions that contain electrical components including capacitors, semiconductor devices such as diodes, transistors and basic microcontrollers.The contribution of each topic to a contemporary engineering application will be demonstrated. These concepts will be practised through hands-on projects carried out in teams. Communication and teamwork skills will be developed through team-based tasks.", boxId: 4 },
    { id: 5, name: "ENG1011", unitTitle: "Engineering methods", unitInfo: "This unit develops methods for analysing complex problems. The basics of statics and material properties are introduced and used to analyse structures such as beams, cantilevers and truss sections. This knowledge is used to design, analyse, build and test a structural component. Simplifications are implicit in the methods used in this analysis. These simplifications will be examined carefully and scrutinised in a broader cross-disciplinary context through problems related to the system being designed. The methods considered will include: the use of simplifications, assumptions, constraints, boundary conditions and levels of required precision.The outcome of the structural analysis and testing will be compared and the suitability of the simplifications used will be scrutinised. You will gain knowledge about the methods engineers use to address complex problems across disciplines. Alongside this “engineering thinking”, you will also gain insight into the role of different specialisations of engineering in society. Communication and teamwork skills will be developed through teamwork tasks." ,boxId: 5 },
    { id: 6, name: "ENG1005", unitTitle: "Engineering mathematics", unitInfo: "Vector algebra and geometry: equations of lines and planes. Linear algebra: matrix operations, up to 3x3 systems of linear equations, eigenvalues and eigenvectors. Calculus: improper integrals, integration by parts. Sequences and series: fundamentals of convergence, Taylor series, use in error analysis. Ordinary differential equations: first order, second order with constant coefficients, repeated roots, simple non-homogeneous cases. Laplace transforms: elementary functions, inversion by tables; shifting; derivatives, applications to ODEs. Multivariable calculus: partial derivatives, gradient and directional derivatives, maxima and minima.", boxId: 6 },
    { id: 7, name: "ENG1014", unitTitle: "Engineering numerical analysis", unitInfo: "This unit introduces computing fundamentals in the context of dynamical systems. Programming structures including arrays, loops, conditional statements, and functions will be presented through the MATLAB environment. This use of MATLAB will initially focus on the analysis of physical systems involving linear and rotational motions that can be solved analytically. These systems will be analysed via kinematic, kinetic, and energy-based methods.The unit will then examine a wider range of complex engineering and dynamical systems that do not exhibit analytical solutions. Problems related to these systems will be solved using numerical methods for linear regression, root-finding, integration, ordinary differential equations, and systems of linear equations. The underlying assumptions and uncertainties associated with the models and numerical methods will be emphasised." , boxId: 7 },
    { id: 8, name: "elective", unitTitle: "*", boxId: 8 },
  ]);

  const swapBoxes = (fromBox, toBox) => {
    let boxes = boxList.slice();
    let fromIndex = boxes.findIndex((box) => box.id === fromBox.id) ?? -1;
    let toIndex = boxes.findIndex((box) => box.id === toBox.id) ?? -1;

    if (fromIndex != -1 && toIndex != -1) {
      let temp = boxes[fromIndex];
      boxes[fromIndex] = { ...boxes[toIndex], id: boxes[fromIndex].id };
      boxes[toIndex] = { ...temp, id: boxes[toIndex].id };
      setBoxList(boxes);
    }
  };

  const handleDragStart = (data) => (event) => {
    let fromBox = JSON.stringify({ id: data.id });
    event.dataTransfer.setData("dragContent", fromBox);
  };

  const handleDragOver = (data) => (event) => {
    event.preventDefault();
    return false;
  };

  const handleDrop = (data) => (event) => {
    event.preventDefault();
    let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
    let toBox = { id: data.id };
    swapBoxes(fromBox, toBox);
    return false;
  };
  const [popupToggle, setPopupToggle] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupContent, setupPopupContent] = useState([]);

  const changeContent=(box)=>{
    setupPopupContent([box]);
    setPopupToggle(!popupToggle);
  }

  const makeBoxes = () => {
    return (
      <div className="box-container">
        {boxList.map((box, index) => (
          <div
            key={index}
            className="box"
            draggable={true}
            onDragStart={handleDragStart({ id: box.id })}
            onDragOver={handleDragOver({ id: box.id })}
            onDrop={handleDrop({ id: box.id })}
          >
            <div className="content">
              <button className="unit-modal" onClick={()=>changeContent(box)}>ⓘ</button>
              <div className="unit-code">{box.name}</div>
              <div className="unit-title">{box.unitTitle}</div>
            </div>
          </div>

        ))}
        
        {popupToggle&&<div className="popup-container" onClick={changeContent}>
          <div className="popup-body" onClick={(e)=>e.stopPropagation()}> 
            <div className="popup-header">
              <button classaName="modal-close" onClick={changeContent}>x</button>              
                <div className="modal-popup-content">
                  {popupContent.map((box)=>{
                    return(
                      <div className="popup-card">
                        <h1> Subject Details</h1>
                        <p> {box.name} </p>
                        <p> {box.unitTitle} </p>
                        <p> {box.unitInfo} </p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
          </div>}
        </div>

      
    );
  };

  return <div className="boxesGroup">{makeBoxes()}</div>;
};

export default App;
