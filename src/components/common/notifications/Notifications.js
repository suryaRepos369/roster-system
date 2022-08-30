import React, { useState, useEffect } from "react";
import Popover from "@idui/react-popover";
import { getApi, postApi } from "../../../services/http/Services";
import { ENDPOINTS } from "../../../services/http/EndPoints";
import { Encryption } from "../../../services/http/Encryption";
import { errorToast } from "../../core";
import Bell from "../../../assets/images/bell.png";
import moment from "moment";

const opened = "bg-primary text-white";
const closed = "bg-grey6 text-grey1";

export const Notifications = ({ pathname, loginData }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [openedNotifications, setOpenedNotifications] = useState([]);

  useEffect(() => {
    if (
      pathname == "/home" ||
      pathname == "/home/personal" ||
      pathname == "/home/dashboard"
    ) {
      setShowNotification(true);
      fetchNotifications();
    } else {
      setShowNotification(false);
    }
  }, [pathname]);

  const fetchNotifications = async (id = "") => {
    // let encryptedEmployeeID = await Encryption(loginData.employee.id);
    let encryptedEmployeeID = loginData.employee.id;
    let url = id
      ? `${ENDPOINTS.UPDATE_NOTIFICATIONS}/${id}/${encryptedEmployeeID}`
      : `${ENDPOINTS.GET_NOTIFICATIONS}/${encryptedEmployeeID}`;

    const response = id ? await postApi(url) : await getApi(url);
    if (response?.status == 200) {
      try {
        let responseData = id ? response?.data?.data : response.data;
        let updatedResponse = [];
        responseData?.forEach((notification) => {
          // for the current opened notification
          if (id == notification.id) {
            updatedResponse.push({ ...notification, isOpened: true });
          }
          // for the remaining notifications
          else {
            updatedResponse.push({ ...notification, isOpened: false });
          }
        });
        setNotifications(updatedResponse);
      } catch (e) {
        console.log(e);
        errorToast("Couldn't fetch notifications! Please try again");
      }
    } else {
      errorToast("Network error: Please try again");
    }
  };

  const handleNotificationClick = (index, id) => {
    let newNotifications = [...notifications];
    let selectedNotification = newNotifications[index];
    if (
      selectedNotification.isOpened == false &&
      selectedNotification.isRead == false
    ) {
      fetchNotifications(id);
    }

    selectedNotification.isOpened = !selectedNotification.isOpened;
    setNotifications(newNotifications);
  };

  const PopoverContent = () => {
    return (
      <div style={{ maxHeight: 450 }}>
        <div className="sp-timeline">
          {notifications.length ? (
            notifications?.map((notification, index) => (
              <div className="timeline-container" key={"notification_" + index}>
                {/* timeline ring */}
                <div className="timeline-ring-div bg-white">
                  <div
                    className={`timeline-ring ${
                      notification.isRead ? "bg-white" : "bg-primary"
                    }`}
                  ></div>
                </div>
                {/* card content */}
                <div
                  className={` ${
                    notification.isRead ? closed : opened
                  } shadow-sm rounded-3 para-sm px-3 py-2 w-100 cursor-pointer 
                ${notification.isOpened ? "height-opened" : "height-closed"}`}
                  onClick={() => {
                    handleNotificationClick(index, notification.id);
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <span className="para-sm--bold"></span>
                    <span>
                      {notification.created_At
                        ? moment
                            .utc(notification.created_At)
                            .local()
                            .format("DD/MM/YYYY hh:mm A")
                        : ""}
                    </span>
                  </div>
                  <div className="lh-sm mt-1">
                    {notification.isOpened
                      ? notification.message
                      : notification.message.length < 55
                      ? notification.message
                      : notification.message.slice(0, 55) + "...."}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>No Notification Found</span>
          )}
        </div>
      </div>
    );
  };

  const notificationButton = (
    <div className="bg-white p-2 rounded-1 d-flex align-items-center cursor-pointer position-relative">
      <img
        className="cursor-pointer"
        src={Bell}
        style={{ width: 28, height: 25 }}
      />
      {/* notification badge with count */}
      {notifications.length ? (
        <div
          className={`rounded-circle bg-white border-primary position-absolute top-0 start-100 
        translate-middle d-flex justify-content-center align-items-center`}
          style={{
            width: 28,
            height: 28,
            borderWidth: 4,
            borderStyle: "solid",
          }}
        >
          <span className="para-sm--bold text-primary">{notifications.length}</span>
        </div>
      ) : null}
    </div>
  );

  return showNotification ? (
    <Popover
      trigger="click"
      placement={"bottomRight"}
      // guessBetterPosition={true}
      width={420}
      height={"auto"}
      content={PopoverContent}
      onChangeOpen={(isOpen) => {
        if (!isOpen) {
          // clearOpened();
        }
      }}
    >
      {notificationButton}
    </Popover>
  ) : null;
};
