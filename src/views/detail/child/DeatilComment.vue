<template>
    <div class="detail-comment">

        <header>
            <div>用户评论{{comment ? '(99)' : '(0)'}}</div>
            <div>更多</div>
        </header>

        <main  v-if="comment">

            <div class="comment-user">
                <img :src="user.avatar" alt="">
                <span>{{user.uname}}</span>
            </div>

            <div class="comment-text">
                <p>{{comment.content}}</p>
            </div>
            <div class="comment-img" v-if="comment.images">
                <img :src="img" v-for="img in comment.images" alt="">
            </div>
            <div class="comment-sku">
                <span>{{comment.created | formatDate}}</span>
                <span> {{comment.style}}</span>
            </div>


        </main>
    </div>
</template>

<script>

    export default {
        name: 'DetailComment',
        props: {
            comment: {}
        },
        computed: {
            user() {
                if (this.comment){
                    return this.comment.user
                } else {
                    return null
                }
            }
        },
        filters:{
            formatDate(value){
                var date = new Date(value * 1000);
                var tt = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-') ;
                return tt;
            }
        }

    }
</script>

<style lang="scss" scoped>

.detail-comment {
    $padding-left: .5rem;
    $padding-right: .5rem; 

    border-bottom: 0.5rem solid rgb(242, 242, 242);

    header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 1rem $padding-right 1rem $padding-left;
        border-bottom: .04rem solid #ddd;
    }

    main {
        padding: 1rem $padding-right 1rem $padding-left;
        display: flex;
        flex-direction: column;

        .comment-user {
            display: flex;
            align-items: center;
            padding-bottom: .9rem;

            span {
                margin-left: 2vw;
            }

            >img {
                width: 3rem;
                border-radius: .2rem;
            }
        }

        .comment-text {
            font-size: .9rem;
            padding-bottom: .9rem;

        }

        .comment-img {

            display: flex;
            gap: .5rem;
            padding-bottom: .5rem;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: wrap;
            flex-direction: row;

            img {
                border-radius: .2rem;
                max-width: 6rem;
                max-height: 6rem;
                width: 100%;
                height: 100%;
                
            }
        }

        .comment-sku {
            font-size: .9rem;
            color: var(--color-l-text);
        }

    }


}

</style>