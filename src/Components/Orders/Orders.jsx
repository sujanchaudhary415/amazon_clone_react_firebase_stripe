import React, { useEffect, useState } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "./../../StateProvider";
import Order from "../Order/Order";
import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";

const Orders = () => {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userOrdersRef = collection(doc(collection(db, "users"), user.uid), "orders");
      const q = query(userOrdersRef, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });

      return () => unsubscribe(); // Cleanup listener on component unmount
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
