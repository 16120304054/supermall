<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class = "comment-info">
    <div class = "info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
            更多 <i class="arrow-right"></i>
        </div>
    </div>
    <div class="info-use">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
            <span class="date">{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
            <img src="" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "DetailCommentInfo",
    props: {
        commentInfo: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    filters: {
        showDate(date){
            date = new Date(date * 1000);
            let year =  date.getFullYear(date);
            let month = date.getMonth(date)+1;
            if(month<10) {
                month = "0"+ month;
            }
            let day = date.getDate(date);
            if(day < 10) {
                day = "0"+day;
            }
            return year+"/"+month+"/"+day;
        }
    }
}
</script>

<style scoped>
 .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .header-title {
    float: left;
    font-size: 15px;
  }

  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }

  .info-use {
    margin: 10px 10px;
  }
.info-use img {
    margin-right: 10px;
    width: 50px;
    border-radius: 50%;
    vertical-align: middle;
}
.info-use span {
    font-size: 15px;
    margin-left: 15px;
}
.info-detail {
    padding: 5px 20px;
}
.info-detail p {
    color: #777;
    text-indent: 2em;
    line-height: 1.5;
     font-size: 14px;
}
.info-detail .info-other {
     font-size: 12px;
    color: #999;
    margin-top: 10px;
}
  .info-other .date {
    margin-right: 8px;
  }
</style>