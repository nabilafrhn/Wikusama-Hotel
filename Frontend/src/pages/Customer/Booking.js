import React from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "../../components/Navbar";
import BookStroke from "../../components/BookStruck";
import ReactToPrint from "react-to-print";
import Invoice from "../../components/Invoice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

export default class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      booking: [],
      user: [],
      customer: [],
      id_booking: "",
      id_user: "",
      id_customer: "",
      id_room_type: "",
      booking_number: "",
      name_customer: "",
      room_type: "",
      email: "",
      booking_date: "",
      check_in_date: "",
      check_out_date: "",
      guest_name: "",
      total_room: "",
      booking_status: "",
      role: "",
      token: "",
      action: "",
      keyword: "",
    };
    this.state.id_customer = localStorage.getItem("id_customer");
    this.state.token = localStorage.getItem("token");
    this.invoiceRefByEmail = React.createRef();
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSearch = () => {
    let data = {
      keyword: this.state.keyword,
    };
    let url = "http://localhost:8080/booking/find/filter";
    axios
      .post(url, data)
      .then((response) => {
        if (response.status === 200) {
          this.setState({
            booking: response.data.data,
          });
        } else {
          alert(response.data.message);
          this.setState({ message: response.data.message });
        }
      })
      .catch((error) => {
        console.log("error", error.response.status);
      });
  };

  getBooking = () => {
    let url =
      "http://localhost:8080/booking/customer/" + this.state.id_customer;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          booking: response.data.data,
        });
        console.log("booking", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getBooking();
  }

  render() {
    return (
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800 mt-20">
        <Navbar />
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <div class="main-content flex flex-col flex-grow p-4">
            <div class="mb-4">
              <div className="flex items-center">
                <div className="justify-items-center w-1/2">
                  <div className="rounded m-5">
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only"
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          class="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500"
                        placeholder="Search your transaction"
                        name="keyword"
                        onChange={this.handleChange}
                      />
                      <button
                        type="submit"
                        class="text-white absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2"
                        onClick={this.handleSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <PDFDownloadLink
                    document={<BookStroke />}
                    fileName="Pemesanan"
                  >
                    {({ loading, error }) =>
                      loading ? (
                        <button className="bg-red-400 text-white py-2 px-4 rounded-lg ">
                          Loading Document...
                        </button>
                      ) : (
                        <button className="bg-red-400 text-white py-2 px-4 rounded-lg ">
                          Cetak Pemesanan
                        </button>
                      )
                    }
                  </PDFDownloadLink>
                </div> */}
              </div>
            </div>
            <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md mx-5">
              <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      ID
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Customer
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Guest
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Room Type
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Room Total
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Booking Date
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      CheckIn Date
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      CheckOut Date
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                      Cetak
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                  {this.state.booking.map((item, index) => {
                    return (
                      <tr class="hover:bg-gray-50" key={index}>
                        <td class="px-4 py-4">{item.id_booking}</td>
                        <td class="px-4 py-4">{item.name_customer}</td>
                        <td class="px-4 py-4">{item.guest_name}</td>
                        <td class="px-4 py-4">
                          {item.room_type.name_room_type}
                        </td>
                        <td class="px-4 py-4">{item.total_room}</td>
                        <td class="px-4 py-4">
                          {moment(item.booking_date).format("DD MMM YYYY")}
                        </td>
                        <td class="px-4 py-4">
                          {moment(item.check_in_date).format("DD MMM YYYY")}
                        </td>
                        <td class="px-4 py-4">
                          {moment(item.check_out_date).format("DD MMM YYYY")}
                        </td>
                        <td class="px-4 py-4">
                          <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                            {item.booking_status}
                          </span>
                        </td>
                        <td class="px-4 py-4 flex justify-center items-center">
                          <ReactToPrint
                            trigger={() => (
                              <button>
                                <FontAwesomeIcon
                                  scale={20}
                                  color="#0076AD"
                                  icon={faFileInvoice}
                                />
                              </button>
                            )}
                            content={() => this.invoiceRefByEmail.current}
                          />
                          <div className="hideen">
                            <div className="hidden">
                              <Invoice
                                data={item}
                                ref={this.invoiceRefByEmail}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <footer class="footer px-4 py-2">
            <div class="footer-content">
              <p class="text-sm text-gray-600 text-center">
                © ukk hotel wikusama
              </p>
            </div>
          </footer>
        </main>
      </div>
    );
  }
}
