import { Tabs } from "expo-router";
import { APP_MAIN_TABS, TabItem } from "@/src/widgets/tab-bar";
import { COLORS } from "@/src/shared/constants";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: "white",
					position: "absolute",
					borderTopColor: COLORS.SECONDARY,
					borderTopWidth: 1,
					minHeight: 70
				}
			}}
		>
			{APP_MAIN_TABS.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						headerShown: false,
						tabBarIcon: ({ focused }) => (
							<TabItem
								icon={tab.icon}
								focused={focused}
								title={tab.title}
							/>
						)
					}}
				/>
			))}
		</Tabs>
	);
}
