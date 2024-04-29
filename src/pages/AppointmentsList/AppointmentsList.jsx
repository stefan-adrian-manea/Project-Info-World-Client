import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { getAppointments } from "../../services/appointments";
import AppointmentRow from "../../components/AppointmentRow/AppointmentRow";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectField from "../../components/formComponents/SelectField";

import "./AppointmentsList.css";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    async function getAppointmentsData() {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData.reverse());
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }
    getAppointmentsData();
  }, []);

  const handleSortChange = (event) => {
    const selectedSortBy = event.target.value;
    setSortBy(selectedSortBy);
  };
  
  const sortedAppointments = useMemo(() => {
    const currentAppointments = [...appointments]
    if (sortBy === "time") {
      return currentAppointments.sort((a, b) => a.interval.localeCompare(b.interval));
    } else if (sortBy === "name") {
      return currentAppointments.sort((a, b) => a.clientName.localeCompare(b.clientName));
    }
    return appointments;
  }, [appointments, sortBy]);


  const filteredAppointments = useMemo(() => {
    return sortedAppointments.filter((appointment) =>
      appointment.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedAppointments, searchTerm, sortBy]);

  return (
    <div className="appointments-list table-container container mt-4">
      <h2>Appointments List</h2>
      <div className="row">
        <div className="col-md-6">
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>
        <div className="col-md-6">
          <SelectField
            id="sortBy"
            name="sortBy"
            label="Sort by"
            value={sortBy}
            onChange={handleSortChange}
            options={[
              { value: "last", label: "Last added" },
              { value: "time", label: "Time" },
              { value: "name", label: "Name" },
            ]}
          />
        </div>
      </div>
      <AppointmentsTable appointmentsList={filteredAppointments} linkToAppointment={true} />
    </div>
  );
}

export default AppointmentsList;
