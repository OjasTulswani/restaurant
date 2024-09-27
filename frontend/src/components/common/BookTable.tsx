import { PrimaryButton, SubmitButton } from './Button'
import { useState } from 'react'
// import type { FormProps } from 'antd'
import {Modal, Form, Input} from "antd"
import { BookingType } from '../../apis/tableBooking/context/tableBookingContextProvider'


const BookTable = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const handleSubmit = (values : BookingType) => {
        setIsModalOpen(false);
        console.log(values);
    }

  return (
    <>
    <PrimaryButton title='Book Table' onClick={showModal} />
    <Modal title='Book Table'
        open={isModalOpen}
        onCancel={handleCancel}
        footer = {[
            
        ]}
    >
        <Form layout='vertical' onFinish={handleSubmit}>
            <Form.Item label="Name" required name="name">
                <Input type='text' />
            </Form.Item>
            <SubmitButton title='Submit' />
        </Form>
    </Modal>

    </>
  )
}

export default BookTable
