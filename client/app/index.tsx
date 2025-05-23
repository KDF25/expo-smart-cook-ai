import { useCheckUser } from "@/src/entities/user";
import { Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
	useCheckUser();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Redirect href={"/auth"} />
		</View>
	);
}
