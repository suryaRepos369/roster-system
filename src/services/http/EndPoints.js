const Authentication = {
  LOGIN: "/sp_emp/api/Login",
  GENERATE_OTP: "/sp_emp/api/Login/SendOTPAsync",
  VERIFY_OTP: "/sp_emp/api/Login/VerifyOTP",
  RESET_PASSWORD: "/sp_emp/api/Login/ResetPassword",
  CREATE_ACCOUNT: "/sp_emp/api/Employee/Register",
  REFRESH_TOKEN: "/sp_emp/api/Token/Refresh",
};

const Profile = {
  UPLOAD_PROFILE_PHOTO: "/sp_emp/api/Employee/SaveProfileImage",
  SAVE_PROFILE: "/sp_emp/api/Employee/SaveProfile",
};

const QrCode = {
  CREATE_QR: "/sp_ad/api/QRCode/GenerateQRCode",
  DELETE_QR: "/sp_ad/api/QRCode/Delete",
};

const Premise = {
  CREATE_PREMISE: "/sp_ad/api/Premises/Premise",
};

const ApproveEmployee = {
  APPROVE_EMPLOYEE: "/sp_ad/api/Admin/ApproveAction",
  UPDATE_EMPLOYEE: "/sp_ad/api/Admin/UpdateEmployee",
};

const Attendance = {
  // format : {date in UTC/status/staffID/pageNo/pageSize}
  GET_ATTENDANCE: "/sp_ad/api/Admin/GetEmpAttendanceInfo",
  // format : {staffID/date in YYYY-MM-DD format}
  EMPLOYEE_ATTENDANCE: "/sp_ad/api/Admin/GetAttendance",
  UPDATE_ATTENDANCE: "/sp_ad/api/admin/approveattendance",
};

const DutyTravel = {
  REQUEST_DUTY_TRAVEL: "/sp_emp/api/Employee/NewRequestDutyTravel",
  UPLOAD_TRAVEL_PROOF: "/sp_emp/api/Employee/UploadTravelProof",
  // format: staffId/status/pageIndex/pagesize
  GET_SUBMITTED_SPD: "sp_emp/api/Employee/GetSubmittedSPD",
  // format: staffId/status/pageIndex/pagesize/searchText
  GET_APPROVE_SPD: "sp_emp/api/Employee/GetPendingForApprovalSPD",
  // format: staffid/pageindex/pagesize/companyid/directorateid/divisionId
  GET_APPROVED_SPD: "sp_emp/api/Employee/GetAllApprovedSPD",
  APPROVE_DUTY_REQUEST: "/sp_ad/api/Admin/ApproveActionSPD",
};

const TravelAllowance = {
  GET_TRAVEL_ALLOWANCE: "/sp_ad/api/Admin/GetTravelAllowance/1/20",
  CREATE_TRAVEL_ALLOWANCE: "/sp_ad/api/Admin/TravelAllowance",
};

const CheckInOut = {
  //format : {staffId/date in YYYY-MM-DD format}
  GET_CHECK_IN_OUT: "/sp_emp/api/Employee/CheckInOutStatus",
  //format : {URL + YYYY-MM-DD format}
  DOWNLOAD_REPORT: "/sp_rp/api/report/GetCheckingHistory/",
};

const HrDashboard = {
  //format : /pageindex/pagesize/companyid/directorateid/divisionId
  GET_DASHBOARD: "/sp_rp/api/report/GetDashBoard",
  //format : /empId
  GET_EMPLOYEE_REPORT: "/sp_rp/api/report/GetEmployee",
  // format : /selectionID
  GET_CHART_DATA: "sp_rp/api/report/GetChart/" // 1 - company, 2 - cluster , 3 - division
};

const DropdownData = {
  GET_REFERENCES: "/sp_emp/api/Reference/Get",
  GET_MANAGERS: "/sp_emp/api/Employee/GetManagers?directorateId=",
  GET_PREMISE: "/sp_ad/api/Premises/GetPremises/1/50",
  GET_QR_LIST: "/sp_ad/api/QRCode/GetQRCodes/1/50",
};

const Common = {
  GET_EMPLOYEES: "/sp_ad/api/admin/GetEmployees",
  GET_ALL_EMPLOYEES: "/sp_ad/api/admin/GetAllEmployees",
  GET_NOTIFICATIONS: "/sp_emp/api/Employee/GetNotification",
  UPDATE_NOTIFICATIONS: "/sp_emp/api/Employee/UpdateNotification",
  DOWNLOAD_EMPLOYEE_DATA: "/sp_rp/api/report/ExportEmployees"
};

export const ENDPOINTS = {
  ...Authentication,
  ...Profile,
  ...QrCode,
  ...Premise,
  ...ApproveEmployee,
  ...Attendance,
  ...DutyTravel,
  ...TravelAllowance,
  ...CheckInOut,
  ...HrDashboard,
  ...DropdownData,
  ...Common,
};
