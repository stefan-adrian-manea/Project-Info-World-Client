import { createContext, useContext, useState } from "react";

import {
  addReceptionServiceHistory,
  addProcessingServiceHistory,
} from "../../services/appointments";

const AppointmentServiceContext = createContext();

export const useAppointmentService = () => useContext(AppointmentServiceContext);

const defaultFormReception = {
  serviceType: "",
  isScratched: false,
  isDamaged: false,
  scratchedLocation: "",
  damageLocation: "",
  mentionedProblems: "",
}
const defaultFormProcessing = {
  partsChanged: "",
  operations: "",
  otherIssues: "",
  repairedOtherIssues: false,
  repairDuration: "",
}
export const AppointmentServiceProvider = ({ children }) => {
  const [appointmentData, setAppointmentData] = useState({});
  const [receptionServiceHistory, setReceptionServiceHistory] = useState(defaultFormReception);
  const [processingServiceHistory, setProcessingServiceHistory] = useState(defaultFormProcessing);

  const handleReceptionFormSubmission = async (appointmentID) => {
    try {
      await addReceptionServiceHistory(appointmentID, {
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
      await addProcessingServiceHistory(appointmentID, {
        ...appointmentData,
        processingServiceHistory,
      });
    } catch (error) {
      console.error("Error adding processing service history:", error);
    }
    resetProcessingForm();
  };

  const resetReceptionForm = () => {
    setReceptionServiceHistory(defaultFormReception);
  };

  const resetProcessingForm = () => {
    setProcessingServiceHistory(defaultFormProcessing);
  };

  const handleChangeReception = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setReceptionServiceHistory((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleChangeProcessing = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setProcessingServiceHistory({ ...processingServiceHistory, [name]: newValue });
  };

  const contextValue = {
    setAppointmentData,
    appointmentData,

    receptionServiceHistory,
    setReceptionServiceHistory,
    handleChangeReception,
    handleReceptionFormSubmission,

    processingServiceHistory,
    setProcessingServiceHistory,
    handleChangeProcessing,
    handleProcessingFormSubmission,
  };

  return (
    <AppointmentServiceContext.Provider value={contextValue}>
      {children}
    </AppointmentServiceContext.Provider>
  );
};
