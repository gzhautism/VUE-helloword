<template>
	<div class="element">
		<Hert :startprop="state1" @tellparent="statechange1"><span slot="to">给商品<el-divider direction="vertical"></el-divider>点赞</span></Hert>
		<el-divider></el-divider>
		<Hert :startprop="state2" @tellparent="statechange2"><span slot="to">给客服<el-divider direction="vertical"></el-divider>点赞</span></Hert>
		<el-divider></el-divider>
		<Hert :startprop="state3" @tellparent="statechange3"><span slot="to">给快递员点赞</span></Hert>
		<el-divider></el-divider>
		<Bort><span slot="to">给商品评星</span></Bort>
		<el-divider><i class="el-icon-mobile-phone"></i></el-divider>
		<el-container>
			<el-header>
				<el-button type="primary" icon="el-icon-s-tools"></el-button>
			</el-header>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>
					<el-row>
						<el-button>默认按钮</el-button>
						<el-button type="primary">主要按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="success">成功按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="info">信息按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="warning">警告按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="danger">危险按钮</el-button>
					</el-row>
					<el-divider><i class="el-icon-mobile-phone"></i></el-divider>
					<el-row>
						<el-button plain>朴素按钮</el-button>
						<el-button type="primary" plain>主要按钮</el-button>
						<el-button type="success" plain>成功按钮</el-button>
						<el-button type="info" plain>信息按钮</el-button>
						<el-button type="warning" plain>警告按钮</el-button>
						<el-button type="danger" plain>危险按钮</el-button>
					</el-row>
					<el-divider><i class="el-icon-mobile-phone"></i></el-divider>
					<el-row>
						<el-button round>圆角按钮</el-button>
						<el-button type="primary" round>主要按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="success" round>成功按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="info" round>信息按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="warning" round>警告按钮</el-button>
						<el-divider direction="vertical"></el-divider>
						<el-button type="danger" round>危险按钮</el-button>
					</el-row>
					<el-divider><i class="el-icon-s-promotion"></i></el-divider>
					<el-row>
						<el-button icon="el-icon-search" circle></el-button>
						<el-button type="primary" icon="el-icon-edit" circle></el-button>
						<el-button type="success" icon="el-icon-check" circle></el-button>
						<el-button type="info" icon="el-icon-message" circle></el-button>
						<el-button type="warning" icon="el-icon-star-off" circle></el-button>
						<el-button type="danger" icon="el-icon-delete" circle></el-button>
					</el-row>
					<el-divider><i class="el-icon-s-promotion"></i></el-divider>
					<el-row>
						<el-breadcrumb separator="/">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
							<el-breadcrumb-item>活动列表</el-breadcrumb-item>
							<el-breadcrumb-item>活动详情</el-breadcrumb-item>
						</el-breadcrumb>
					</el-row>
					<el-row>
						<el-radio-group v-model="direction">
							<el-radio label="ltr">从左往右开</el-radio>
							<el-radio label="rtl">从右往左开</el-radio>
							<el-radio label="ttb">从上往下开</el-radio>
							<el-radio label="btt">从下往上开</el-radio>
						</el-radio-group>

						<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
							点我打开
						</el-button>

						<el-drawer title="我是标题" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
							<span>我来啦!</span>
						</el-drawer>
					</el-row>
					<el-divider></el-divider>
					<div class="block">
						<el-carousel trigger="click" height="300px" indicator-position="outside" arrow="always" type="card">
							<el-carousel-item v-for="item in startimg" :key="item">
								<img :src="item" style="height: 300px;">
							</el-carousel-item>
						</el-carousel>
					</div>
				</el-main>
			</el-container>
			<el-header>Footer</el-header>
		</el-container>
		<el-calendar v-model="value"></el-calendar>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Hert from '@/components/heart/Hert.vue'
	import Bort from '@/components/Bort/Bort.vue'

	export default {
		components: {
			Hert,
			Bort,
		},
		methods: {
			// 请求API接口 获取点赞状态
			statechange1(e) {
				console.log("通知服务器讲商品状态设置为:", e.state);
			},
			statechange2(e) {
				console.log("通知服务器将客服状态设置为:", e.state);
			},
			statechange3(e) {
				console.log("通知服务器将快递员状态设置为:", e.state);
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
					.then(() => {
						done();
					})
					.catch(() => {});
			}
		},
		data() {
			return {
				// 从服务器获取商品点赞
				state1: true,
				state2: false,
				state3: false,
				startimg: [require("../assets/img/1.jpg"),
					require("../assets/img/2.jpg"),
					require("../assets/img/3.jpg"),
					require("../assets/img/4.jpg"),
				],
				value: new Date(),
				drawer: false,
				direction: 'rtl',
			}
		}

	}
</script>

<style>

</style>

