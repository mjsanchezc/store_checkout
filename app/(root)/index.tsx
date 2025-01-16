import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/home">Home</Link>
      <Link href="/(root)/products/1">Product</Link>
      <Link href="/(root)/checkout/shipping_details">Shipping Details</Link>
      <Link href="/(root)/checkout/credit_card_details">Credit Card Details</Link>
      <Link href="/(root)/checkout/summary">Summary</Link>
      <Link href="/(root)/checkout/confirmation">Confirmation</Link>
    </View>
  );
}
