import React from "react";
import axios from "axios";
import { Page, Text, Document, View, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    flexGrow: 1,
  },
  header: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
  },
  col: {
    width: "11%",
    borderLeftWidth: 1,
    paddingLeft: 3,
    paddingRight: 3,
    justifyContent: "center", // Align text vertically
  },
  cellText: {
    fontSize: 10,
  },
});

export default class BookStruck extends React.Component {
  constructor() {
    super();
    this.state = {
      booking: [],
      id_customer: localStorage.getItem("id_customer"),
    };
    this.state.token = localStorage.getItem("token");
  }

  getBooking = () => {
    let url = `http://localhost:8080/booking/customer/${this.state.id_customer}`;
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
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Invoice Booking Room</Text>
            <View style={styles.row}>
              <View style={styles.col}>
                <Text style={styles.cellText}>ID</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Customer</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Guest</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Room Type</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Room Total</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Booking Date</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>CheckIn Date</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>CheckOut Date</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.cellText}>Status</Text>
              </View>
            </View>
            {this.state.booking.map((item, index) => (
              <View style={styles.row} key={index}>
                <View style={styles.col}>
                  <Text style={styles.cellText}>{item.id_booking}</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>{item.name_customer}</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>{item.guest_name}</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>
                    {item.room_type.name_room_type}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>{item.total_room}</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>
                    {moment(item.booking_date).format("DD MMM YYYY")}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>
                    {moment(item.check_in_date).format("DD MMM YYYY")}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>
                    {moment(item.check_out_date).format("DD MMM YYYY")}
                  </Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.cellText}>{item.booking_status}</Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );
  }
}
