import React, { forwardRef } from "react";
import moment from "moment";
function formatIDR(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

const Invoice = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {console.log(props.data)}
      <div className="container mx-auto mt-8 p-4 border border-gray-300 rounded shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Invoice Hotel Wikusama</h1>
          <p>Alamat Hotel: Jl. Contoh No. 123, Kota Contoh</p>
        </div>
        <div className="my-4">
          <p>Nomor Pemesanan: {props.data.booking_number}</p>
          <p>
            Tanggal Pemesanan:{" "}
            {moment(props.data.booking_date).format("DD MMM YYYY")}
          </p>
          <p>Nama Tamu: {props.data.guest_name}</p>
          <p>Nama Customer: {props.data.name_customer}</p>
          <p>Email : {props.data.email}</p>
        </div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Nama Kamar</th>
              <th className="border border-gray-300 p-2">Tanggal Check-in</th>
              <th className="border border-gray-300 p-2">Tanggal Check-out</th>
              <th className="border border-gray-300 p-2">Harga per Malam</th>
              <th className="border border-gray-300 p-2">Jumlah Kamar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">
                {props.data.room_type.name_room_type}
              </td>
              <td className="border border-gray-300 p-2">
                {moment(props.data.check_in_date).format("DD MMM YYYY")}
              </td>
              <td className="border border-gray-300 p-2">
                {moment(props.data.check_out_date).format("DD MMM YYYY")}
              </td>
              <td className="border border-gray-300 p-2">
                {formatIDR(props.data.room_type.price)}
              </td>
              <td className="border border-gray-300 p-2">
                {props.data.total_room}
              </td>
            </tr>
            {/* Anda dapat menambahkan baris-baris tambahan sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Invoice;
