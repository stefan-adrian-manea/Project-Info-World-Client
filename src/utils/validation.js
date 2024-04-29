const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  return nameRegex.test(name);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  //"(###) ###-####", "###-###-####", "+##########" or "+###-###-####"
  const phoneRegex = /^(\+?\d{10}|\+?\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$/;
  return phoneRegex.test(phoneNumber);
};

export const validateClientForm = (client) => {
  const { firstName, lastName, email, phoneNumber } = client;

  if (!isValidEmail(email)) {
    return { isValid: false, message: "Invalid email!" };
  }
  if (!isValidPhoneNumber(phoneNumber)) {
    return { isValid: false, message: "Invalid phone number!" };
  }
  if (!isValidName(firstName)) {
    return { isValid: false, message: "Invalid first name!" };
  }
  if (!isValidName(lastName)) {
    return { isValid: false, message: "Invalid last name!" };
  }

  return { isValid: true, message: "Client details are valid" };
};

export const horsepowerToKilowatts = (horsepower) => {
  return (horsepower / 1.341).toFixed(2);
};

export const kilowattsToHorsepower = (kilowatts) => {
  return (kilowatts * 1.341).toFixed(2);
};

const isValidMakeModel = (value) => {
  // match letters, spaces, and numbers
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(value);
};

const isValidEngineType = (engineType) => {
  const validTypes = ["diesel", "gasoline", "electric", "hybrid"];
  return validTypes.includes(engineType.toLowerCase());
};

const isValidPower = (power) => {
  //  match positive integers
  const powerRegex = /^(?!0)\d*\.?\d+$/;
  return powerRegex.test(power);
};

const isValidYear = (year) => {
  const yearRegex = /^(?!0)\d{4}$/;
  return yearRegex.test(year) && parseInt(year) <= 2024;
};

const isValidRegistrationNumber = (registrationNumber) => {
  // 1 or 2 uppercase letters
  // 1 to 3 digits
  // 3 uppercase letters
  const registrationRegex = /^[A-Z]{1,2}\d{2,3}[A-Z]{3}$/;
  return registrationRegex.test(registrationNumber);
};

const isValidEngineCapacity = (capacity) => {
  const engineCapacityRegex = /^(?!0)\d{3,5}$/;
  return engineCapacityRegex.test(capacity);
};

const isValidChassisNumber = (chassisNumber) => {
  const chassisNumberRegex = /^[A-Z0-9]{10}$/;
  return chassisNumberRegex.test(chassisNumber);
};

export const validateCarForm = (car) => {
  const {
    make,
    model,
    year,
    engineType,
    engineCapacity,
    horsepower,
    kilowatts,
    registrationNumber,
    chassisNumber,
  } = car;

  if (!isValidMakeModel(make)) {
    return { isValid: false, message: "Invalid make!" };
  }
  if (!isValidMakeModel(model)) {
    return { isValid: false, message: "Invalid model!" };
  }
  if (!isValidYear(year)) {
    return { isValid: false, message: "Invalid year!" };
  }
  if (!isValidEngineType(engineType)) {
    return { isValid: false, message: "Invalid engine type!" };
  }
  if (!isValidEngineCapacity(engineCapacity)) {
    return { isValid: false, message: "Invalid engine capacity!" };
  }
  if (!isValidPower(horsepower)) {
    return { isValid: false, message: "Invalid horsepower!" };
  }
  if (!isValidPower(kilowatts)) {
    return { isValid: false, message: "Invalid kilowatts!" };
  }
  if (horsepowerToKilowatts(horsepower) !== kilowatts) {
    return { isValid: false, message: "Horsepower and kilowatts values are not equivalent!" };
  }
  if (!isValidRegistrationNumber(registrationNumber)) {
    return { isValid: false, message: "Invalid registration number!" };
  }
  if (!isValidChassisNumber(chassisNumber)) {
    return { isValid: false, message: "Invalid chassis number!" };
  }

  return { isValid: true, message: "Car details are valid" };
};

const isValidInterval = (interval) => {
  const regex = /^(0[8-9]|1[0-7]):(00|30)$/;

  return regex.test(interval);
};

const isValidContact = (contact) => {
  const emailOrPhone = contact.split(" ")[1];

  if (isValidEmail(emailOrPhone) || isValidPhoneNumber(emailOrPhone)) {
    return true;
  }
  return false;
};

export const validateAppointment = (appointment) => {
  const { interval, clientName, contact } = appointment;

  if (!isValidInterval(interval)) {
    return { isValid: false, message: "Invalid interval!" };
  }
  if (!isValidName(clientName)) {
    return { isValid: false, message: "Invalid client name!" };
  }
  if (!isValidContact(contact)) {
    return { isValid: false, message: "Invalid contact!" };
  }
  return { isValid: true, message: "Appointment details are valid!" };
};

export const isValidRepairDuration = (repairDuration) => {
  if (repairDuration % 10 !== 0) {
    return { isValid: false, message: "Invalid interval!" };
  }
  return { isValid: true, message: "Repair duration details are valid!" };
};
