import { PrimaryButton, SubmitButton } from "./Button";
import { useState } from "react";
// import { useContext } from "react";
import { Modal, Form, Input, DatePicker, TimePicker } from "antd";
// import { BookingInputType, BookingContext } from "../../context/tableBookingContextProvider";
import useBookingTableApi from "../../hooks/apis/TableBooking/useBookingTableApi";
import { ApiResponseData } from "../../types/api";

const BookTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const {createBooking} = useContext(BookingContext);
  const {createBooking} = useBookingTableApi();

  const handleSubmit = (values : ApiResponseData) => {
    setIsModalOpen(false);
    createBooking(values)
    console.log(values);
  };

  return (
    <>
      <PrimaryButton title="Book Table" onClick={showModal} />
      <Modal
        title="Book Table"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              {
                pattern:  /^\d{10,15}$/,
                message: "Phone number should be 10-15 digits!",
              },
              
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Please select a time!" }]}
          >
            <TimePicker />
          </Form.Item>

          <Form.Item
            label="Number of persons"
            name="personNumber"
            rules={[
              {
                required: true,
                message: "Please input the number of persons!",
              },
              
              { min: 1, message: "Number of persons should be at least 1!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <SubmitButton title="Submit" />
        </Form>
      </Modal>
    </>
  );
};

export default BookTable;
