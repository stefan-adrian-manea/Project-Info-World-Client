import { createContext, useContext, useState } from "react";

import { updateAppointment } from "../../services/appointments";

const AppointmentServiceContext = createContext();

export const useAppointmentService = () => useContext(AppointmentServiceContext);

const defaultFormReception = {
  serviceType: "",
  isScratched: false,
  isDamaged: false,
  scratchedLocation: "",
  damageLocation: "",
  mentionedProblems: "",
};
const defaultFormProcessing = {
  partsChanged: "",
  operations: "",
  otherIssues: "",
  repairedOtherIssues: false,
  repairDuration: "",
  completed:false,
};
export const AppointmentServiceProvider = ({ children }) => {
  const [appointmentData, setAppointmentData] = useState({});
  const [receptionServiceHistory, setReceptionServiceHistory] = useState(defaultFormReception);
  const [processingServiceHistory, setProcessingServiceHistory] = useState(defaultFormProcessing);

  const handleReceptionFormSubmission = async (appointmentID) => {
    setProcessingServiceHistory((prevState) => ({ ...prevState, completed: true }));
    try {
      await updateAppointment(appointmentID, {
        ...appointmentData,
        receptionServiceHistory,
      });
    } catch (error) {
      console.error("Error adding reception service history:", error);
    }
    resetReceptionForm();
  };

  const handleProcessingFormSubmission = async (appointmentID) => {
    try {
      await updateAppointment(appointmentID, {
        ...appointmentData,
        processingServiceHistory,
      });
    } catch (error) {
      console.error("Error adding processing service history:", error);
    }
    resetProcessingForm();
  };
  const resetReceptionForm = () => setReceptionServiceHistory(defaultFormReception);
  const resetProcessingForm = () => setProcessingServiceHistory(defaultFormProcessing);
  

  const handleChange = (event, setStateFunction) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setStateFunction((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleChangeReception = (e) => handleChange(e, setReceptionServiceHistory);

  const handleChangeProcessing = (e) => handleChange(e, setProcessingServiceHistory);

  const contextValue = {
    setAppointmentData,
    appointmentData,

    receptionServiceHistory,
    setReceptionServiceHistory,
    handleChangeReception,
    handleReceptionFormSubmission,
    resetReceptionForm,

    processingServiceHistory,
    setProcessingServiceHistory,
    handleChangeProcessing,
    handleProcessingFormSubmission,
    resetProcessingForm,
  };

  return (
    <AppointmentServiceContext.Provider value={contextValue}>
      {children}
    </AppointmentServiceContext.Provider>
  );
};
