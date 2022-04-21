<template>
	<div class="home">
		<div class="content">
			<div class="content-blog">
				<div class="blog-content">
					<div class="blog-card">

					</div>
					<div class="blog-card">

					</div>
					<div class="blog-card">

					</div>
					<div class="blog-card">

					</div>
					<div class="blog-card">

					</div>
					<div class="blog-card">

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.home {
		width: 100%;
		display: flex;
		// justify-content: center;
		// align-content: center;
		flex-direction: column;
		flex-shrink: 0;
		background-color: #E9EBEA;
	}

	

	//内容
	.content {
		display: flex;
		margin-top: 0.5rem;
		width: 100%;
		flex-shrink: 0;
		margin-bottom: 1.5rem;
		justify-content: center;

		.content-blog {
			display: flex;
			// flex-wrap: wrap;
			width: 80%;
			background-color: red;
			height: 30rem;
			border-radius: 0.5rem;
			padding: 0.3rem;

			.blog-content {
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				background-color: green;
				height: 100%;
				justify-content: space-around;
				align-content: flex-start;

				.blog-card {
					width: 7rem;
					height: 4rem;
					background-color: red;
					margin: 20px;
				}
			}

		}
	}
	.clearfix-menu .router-link-active{
			color: #0B5ED7;
	}
</style>
