import { Text, View } from "react-native";

import { useCheckUser } from "@/src/entities/user";
import { Redirect } from "expo-router";

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
			<Text>Edit app/index.tsx to edit this screen.</Text>
			{/* <Redirect href={"/auth"}/> */}
		</View>
	);
}
