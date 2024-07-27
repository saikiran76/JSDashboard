    import mongoose from "mongoose";

    interface ShipmentAttrs {
        id: number;
        hbl_no: string;
        mbl_no: string;
        po_ref_no: string;
        recipt: string;
        recipt_date: Date;
        loading: string;
        loading_date: Date;
        discharge: string;
        discharge_date: Date;
        delivery: string;
        delivery_date: Date;
        booking_no: string;
        booking_date: Date;
        booking_status: string;
        size_type: string;
        carrier: string;
        commodity: string;
        milestone: string;
        milestone_group: string;
        shipper: string;
        consignee: string;
        created_at: Date;
        updated_at: Date;
        estimated_time_of_departure: Date;
        estimated_time_of_arrival: Date;
        actual_time_of_departure: Date;
        actual_time_of_arrival: Date;
    }

    interface ShipmentModel extends mongoose.Model<ShipmentDoc>{
        build(attrs: ShipmentAttrs): ShipmentDoc
    }

    interface ShipmentDoc extends mongoose.Document{
        id: number;
        hbl_no: string;
        mbl_no: string;
        po_ref_no: string;
        recipt: string;
        recipt_date: Date;
        loading: string;
        loading_date: Date;
        discharge: string;
        discharge_date: Date;
        delivery: string;
        delivery_date: Date;
        booking_no: string;
        booking_date: Date;
        booking_status: string;
        size_type: string;
        carrier: string;
        commodity: string;
        milestone: string;
        milestone_group: string;
        shipper: string;
        consignee: string;
        created_at: Date;
        updated_at: Date;
        estimated_time_of_departure: Date;
        estimated_time_of_arrival: Date;
        actual_time_of_departure: Date;
        actual_time_of_arrival: Date;
    }


    const shipmentSchema = new mongoose.Schema({
        id: { type: Number, required: true },
        hbl_no: { type: String, required: true },
        mbl_no: { type: String, required: true },
        po_ref_no: { type: String, required: true },
        recipt: { type: String, required: true },
        recipt_date: { type: Date, required: true },
        loading: { type: String, required: true },
        loading_date: { type: Date, required: true },
        discharge: { type: String, required: true },
        discharge_date: { type: Date, required: true },
        delivery: { type: String, required: true },
        delivery_date: { type: Date, required: true },
        booking_no: { type: String, required: true },
        booking_date: { type: Date, required: true },
        booking_status: { type: String, required: true },
        size_type: { type: String, required: true },
        carrier: { type: String, required: true },
        commodity: { type: String, required: true },
        milestone: { type: String, required: true },
        milestone_group: { type: String, required: true },
        shipper: { type: String, required: true },
        consignee: { type: String, required: true },
        created_at: { type: Date, default: Date.now },
        updated_at: { type: Date, default: Date.now },
        estimated_time_of_departure: { type: Date, required: true },
        estimated_time_of_arrival: { type: Date, required: true },
        actual_time_of_departure: { type: Date, required: true },
        actual_time_of_arrival: { type: Date, required: true }
    });

    const Shipment = mongoose.model<ShipmentDoc, ShipmentModel>('Shipment', shipmentSchema);

    export { Shipment, ShipmentDoc }
