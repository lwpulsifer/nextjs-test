import BasePage from "../../components/BasePage";
import BaseCard from "../../components/BaseCard";
import PostsList from "../../components/posts/PostsList";

export default function PostsPage() {
	return (
		<BasePage>
			<BaseCard>
				<PostsList />
			</BaseCard>
		</BasePage>
	);
}
