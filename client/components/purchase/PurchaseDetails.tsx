"use client";
import React, { use, useState } from "react";
import { useCartContext } from "../../context/cart.context";
import { useUserContext } from "../../context/user.context";
import { DetailType } from "../../utils/constants";
import { queryClient } from "../../utils/queryClient";
import PurchaseInformation from "./PurchaseInformation";

import UserForm from "./UserForm";

const PurchaseDetails = () => {
  const { user } = useUserContext();
  const [detailForm, setDetailForm] = useState<DetailType | null>(null);

  console.log(user);
  return (
    <div className="purchaseDetail bg-black p-50">
      {user?.address.district !== null ||
      detailForm === DetailType.PurchaseInformation ? (
        <PurchaseInformation />
      ) : (
        <UserForm setDetailForm={setDetailForm} />
      )}
    </div>
  );
};

export default PurchaseDetails;
