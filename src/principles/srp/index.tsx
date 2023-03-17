import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Product } from "./product";
import { Rating } from "react-simple-star-rating";
import { Bad } from "./bad";
import { Good } from "./good";
import GPT4 from "./GPT4";

export function SRP() {
  // return <Bad />;
  // return <Good />;
  return <GPT4 />;
}
