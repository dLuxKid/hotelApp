import junior from "../assets/juniorSuite.jpg";
import deluxe from "../assets/deluxeSuite.jpg";
import executive from "../assets/executiveSUite.jpg";
import presidential from "../assets/PresidentialSuite.jpg";

export const hotelRooms = [
  {
    id: 1,
    type: "Junior Suite",
    price: 150,
    bedType: "Queen",
    occupancy: 2,
    amenities: [
      "Ensuite bathroom with shower and bathtub",
      "Flat-screen TV with cable channels",
      "Complimentary Wi-Fi",
      "Mini-fridge and coffee maker",
      "Sofa bed",
    ],
    imgUrl: junior,
  },
  {
    id: 2,
    type: "Deluxe Suite",
    price: 250,
    bedType: "King",
    occupancy: 2,
    amenities: [
      "Ensuite bathroom with Jacuzzi tub and separate shower",
      "Flat-screen TV with premium cable channels",
      "Complimentary Wi-Fi",
      "Mini-fridge, microwave, and coffee maker",
      "Lounge area with sofa and chairs",
    ],
    imgUrl: deluxe,
  },
  {
    id: 3,
    type: "Executive Suite",
    price: 350,
    bedType: "King",
    occupancy: 4,
    amenities: [
      "Ensuite bathroom with double sink, shower, and Jacuzzi tub",
      "Large flat-screen TV with premium cable channels and DVD player",
      "Complimentary Wi-Fi",
      "Full kitchen with stainless steel appliances and granite countertops",
      "Dining area with table and chairs",
      "Separate living area with sofa, chairs, and fireplace",
    ],
    imgUrl: executive,
  },
  {
    id: 4,
    type: "Presidential Suite",
    price: 1000,
    bedType: "King and Queen",
    occupancy: 6,
    amenities: [
      "Master bedroom with king-size bed and premium bedding",
      "Second bedroom with two queen-size beds and premium bedding",
      "Two ensuite bathrooms with Jacuzzi tubs and separate showers",
      "Large flat-screen TVs with premium cable channels and DVD players in both bedrooms",
      "Complimentary Wi-Fi",
      "Full kitchen with stainless steel appliances and granite countertops",
      "Dining area with table and chairs",
      "Separate living area with sofa, chairs, and fireplace",
      "Private balcony with outdoor seating and city views",
    ],
    imgUrl: presidential,
  },
];
