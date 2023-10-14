import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import { Fragment, useState, useCallback, useEffect } from "react";
import { Event } from "../models/Event";
import moment from "moment";
import "../sass/styles.scss";
import { Select, Modal, Form, Input } from "antd";
import { getEvent, addEvent } from "../services/roomService";

const rooms: {
  value: string;
  label: string;
}[] = [
  {
    value: "Room 1",
    label: "Room 1"
  },
  {
    value: "Room 2",
    label: "Room 2"
  },
  {
    value: "Room 3",
    label: "Room 3"
  },
  {
    value: "Room 4",
    label: "Room 4"
  }
];

// Setup the localizer by providing the mo ment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

const CalendarTable = () => {
  const [events, setEvents] = useState([]);
  const [selectRoom, setSelectRoom] = useState(rooms[0].value);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values: { title: string; name: string }) => {
        const event: Event = {
          roomId: selectRoom,
          start: startTime,
          end: endTime,
          title: values.title,
          name: values.name
        };
        const data = [...events, event];
        setEvents(data);
        addEvent(event);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        return;
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      setStartTime(start);
      setEndTime(end);
      showModal();
    },
    [setEvents]
  );

  const handleSelectEvent = useCallback((event) => {
    showEventInfo(event);
  }, []);

  useEffect(() => {
    console.log(`Fetch event room ${selectRoom}`);
    getEvent(selectRoom).then((res) => {
      console.log(res);

      setEvents(res);
    });
  }, [selectRoom]);

  const handleRoomChange = (room) => {
    console.log("Set room: " + room);

    setSelectRoom(room);
  };

  const showEventInfo = (event: Event) => {
    Modal.info({
      title: selectRoom,
      content: (
        <div>
          <p>Title: {event.title}</p>
          <p>Name: {event.name}</p>
          <p>Start: {event.start.toLocaleString()}</p>
          <p>End: {event.end.toLocaleString()}</p>
        </div>
      ),
      onOk() {}
    });
  };
  return (
    <Fragment>
      <Modal
        title={selectRoom}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="wrap"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input this field!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input this field!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Start" name="start">
            <label htmlFor="start">{startTime.toLocaleString()}</label>
          </Form.Item>
          <Form.Item label="End" name="end">
            <label htmlFor="end">{endTime.toLocaleString()}</label>
          </Form.Item>
        </Form>
      </Modal>

      <Select
        defaultValue={selectRoom}
        style={{ minWidth: 120, margin: "10px auto", display: "block" }}
        options={rooms}
        onChange={handleRoomChange}
        size="large"
      />

      <Calendar
        localizer={localizer}
        defaultView={Views.DAY}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        style={{ minHeight: 700 }}
        timeslots={1}
      />
    </Fragment>
  );
};
export default CalendarTable;
