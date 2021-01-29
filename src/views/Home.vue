<template>
	<div class="home">
		<div class="block">
			<el-carousel trigger="click" height="300px" indicator-position="outside" arrow="always" type="card">
				<el-carousel-item v-for=" b in startimg" :key="b">
					<img :src="b" style="height: 300px;">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="books">
			<el-row :gutter="20">
				<el-col :span="6" v-for="item in books" :key="item.id">
					<!-- <router-link :to="'/book/'+item.id"> -->
					<router-link :to="{name:'Book',params:{pk:item.id}}">
						<el-card :body-style="{ padding: '0px' }" shadow="hover" class="book">
							<img :src="item.mainimg" class="image">
							<div style="padding: 14px;">
								<h3>{{item.title}}</h3>
							</div>
						</el-card>
					</router-link>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import {
		books
	} from "../data/bookdata.js"
	export default {
		name: 'Home',
		data() {
			return {
				books: books,
				startimg: [require("../assets/img/1.jpg"),
					require("../assets/img/2.jpg"),
					require("../assets/img/3.jpg"),
					require("../assets/img/4.jpg"),
				],
			}
		}
	}
</script>

<style lang="less">
	.books {
		width: 80%;
		margin: 0 auto;

		a {
			text-decoration: none;
		}

		h3 {
			text-align: center;
		}

		.book {
			img {
				width: 100%;
			}
		}

		.el-col {
			margin: 10px 0;
		}
	}
</style>
