import BasePage from "../../commonComponents/BasePage";
import BaseCard from "../../commonComponents/BaseCard";
import PostsList from "../../commonComponents/posts/PostsList";

export default function PostsPage() {
	return (
		<BasePage>
			<BaseCard>
				<PostsList />
			</BaseCard>
		</BasePage>
	);
}
