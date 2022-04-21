<template>
	<div class="nav">
		<div class="nav-bar">
			<div class="logo">
				xxxx
			</div>
			<nav class="clearfix">
				<div class="nav-content">
					<a href="#" id="pull">Menu</a>
					<ul class="clearfix-menu">
						<li>
							<router-link to="/home">首页</router-link>
						</li>
						<li>
							<router-link to="/blog">博客</router-link>
						</li>
						<li>
							<router-link to="/live">个人生活</router-link>
						</li>
						<li>
							<router-link to="/about">关于我</router-link>
						</li>
						<li>
							<router-link to="/future">未来规划</router-link>
						</li>
						<li>
							<router-link to="/demo">项目demo</router-link>
						</li>
					</ul>
				</div>
			</nav>
			<div class="search">
				<a href="https://github.com/zhanghaoshan2000">GitHub</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		// name:'navbar'
	}
</script>

<style lang="less">
	.nav-bar {
		width: 100%;
		display: flex;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
		line-height: 280px;

		.clearfix {
			width: 70%;
			height: 280px;
			background-color: #fff;
			display: flex;
			line-height: 280px;
			justify-content: center;
			// box-shadow: 0.3rem 0.3rem 0.6rem rgba(0, 0, 0, 0.2);
			z-index: 1;
			font-size: 0.3rem;

			a {
				text-decoration: none;
				color: #000000;
			}

			.nav-content {
				display: flex;
				justify-content: space-between;
				// justify-content: center;
			}

			.clearfix-menu {
				display: flex;
				justify-content: space-around;

				li {
					list-style: none;
					padding: 0 40px;

					.router-link-active {
						padding-bottom: 0.2rem;
						border-bottom: 20px solid #0D6EFD;
						color: #0D6EFD;
						transition: all .3s;
					}
				}
			}
		}

		.logo {
			text-align: center;
			width: 10%;
			font-size: 0.4rem;
			background-color: #fff;
		}

		.search {
			width: 20%;
			font-size: 0.4rem;
			text-align: center;
			background-color: #fff;

			a {

				text-decoration: none;
			}
		}
	}

	@media only screen and (min-width:683px)and(max-width:875px) {
		.clearfix-menu {
			display: flex;
			width: 7rem;
			height: 100%;
			white-space: nowrap;
			overflow-y: hidden;
			overflow: auto;
			margin-left: 0.2rem;

		}
	}

	@media only screen and (max-width:683px) {
		.clearfix-menu {
			display: flex;
			width: 5rem;
			height: 100%;
			white-space: nowrap;
			overflow-y: hidden;
			overflow: auto;
			margin-left: 0.2rem;

		}
	}
</style>
