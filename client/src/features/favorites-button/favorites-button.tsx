import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

import {
	IFavorite,
	useAddRecipeFavorites,
	useRemoveRecipeFavorites
} from "@/src/entities/recipe";
import { COLORS } from "@/src/shared/constants";
import { Loader } from "@/src/shared/ui";

interface IFavoritesButtonProps {
	isFavorite: boolean;
	params: IFavorite;
	id: string;
	handleOnChange: () => void;
}

export const FavoritesButton: FC<IFavoritesButtonProps> = ({
	isFavorite,
	params,
	id,
	handleOnChange
}) => {
	const { addRecipe, isLoading: isLoadingAdd } = useAddRecipeFavorites();
	const { removeRecipe, isLoading: isLoadingRemove } =
		useRemoveRecipeFavorites();

	const handleOnPress = () => {
		if (isFavorite) {
			removeRecipe(id).then(() => handleOnChange());
		} else {
			addRecipe(params).then(() => handleOnChange());
		}
	};
	const isLoading = isLoadingAdd || isLoadingRemove;
	return (
		<TouchableOpacity onPress={handleOnPress}>
			{isLoading ? (
				<Loader />
			) : (
				<Ionicons
					name={!!isFavorite ? "bookmark" : "bookmark-outline"}
					size={30}
					color={isFavorite ? COLORS.ACCENT : COLORS.ACCENT}
				/>
			)}
		</TouchableOpacity>
	);
};
