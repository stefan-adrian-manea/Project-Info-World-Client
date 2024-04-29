import React, { useState, useEffect, useMemo } from "react";
import { getAppointments } from "../../services/appointments";
import SearchBar from "../../components/SearchBar/SearchBar";
import SelectField from "../../components/formComponents/SelectField";

import "./AppointmentsList.css";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

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

  const handleFilterChange = (event) => {
    const selectedSortBy = event.target.value;
    setFilterBy(selectedSortBy);
  };

  const filteredByStatusAppointments = useMemo(() => {
    const currentAppointments = [...appointments];
    if (filterBy === "completed") {
      return currentAppointments.filter(
        (appointment) => appointment.processingServiceHistory?.completed === true
      );
    } else if (filterBy === "unfinished") {
      return currentAppointments.filter(
        (appointment) => appointment.processingServiceHistory?.completed !== true
      );
    }
    return appointments;
  }, [appointments, filterBy]);

  const sortedAppointments = useMemo(() => {
    const currentAppointments = [...filteredByStatusAppointments];
    if (sortBy === "time") {
      return currentAppointments.sort((a, b) => a.interval.localeCompare(b.interval));
    } else if (sortBy === "name") {
      return currentAppointments.sort((a, b) => a.clientName.localeCompare(b.clientName));
    }
    return currentAppointments;
  }, [filteredByStatusAppointments, sortBy]);

  const filteredAppointments = useMemo(() => {
    return sortedAppointments.filter((appointment) =>
      appointment.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [sortedAppointments, searchTerm, sortBy, filterBy]);

  return (
    <div className="appointments-list table-container container mt-4">
      <h2>Appointments List</h2>
      <div className="row">
        <div className="col-md-6">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
        <div className="col-md-6">
          <SelectField
            id="filterBy"
            name="filterBy"
            label="Filter by"
            value={filterBy}
            onChange={handleFilterChange}
            options={[
              { value: "all", label: "Show all appointments" },
              { value: "completed", label: "Show only completed appointments" },
              { value: "unfinished", label: "Show only unfinished appointments" },
            ]}
          />
        </div>
      </div>
      <AppointmentsTable appointmentsList={filteredAppointments} linkToAppointment={true} />
    </div>
  );
}

export default AppointmentsList;
