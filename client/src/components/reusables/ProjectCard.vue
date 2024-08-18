<template>
<div class="card-container">
    <div class="card">
        <div class="box d-flex flex-align-center flex-justify-center">
            <div class="content p-20">
              <h2>{{cardIndexLcl}}</h2>
                <h3 :title="project.name" class="cut-text text-white">{{ project.name }}</h3>
                <p :title="project.description" class="cut-text ml-20 mr-20 text-white">{{ project.description }}</p>
                <a class="text-white">See more</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
        },
        cardIndex: {
            type: Number,
        }
    },
    computed:{
      cardIndexLcl(){
        let cardIndexLcl = this.$_.cloneDeep(this.cardIndex)
        return cardIndexLcl + 1;
      }
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    .card {
        position: relative;
        min-width: 300px;
        max-width: 500px;
        height: 250px;
        box-shadow:
            inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3),
            -5px -5px 15px rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        transition: 0.5s;

        .box {
            position: absolute;
            top: 12px;
            left: 12px;
            right: 12px;
            bottom: 12px;
            background: $p-color;
            border-radius: 15px;
            overflow: hidden;
            transition: 0.5s;

            &:hover {
                transform: translateY(-50px);
            }

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                background: rgba(255, 255, 255, 0.03);
            }

            .content {
                text-align: center;

                h2 {
                    position: absolute;
                    top: -10px;
                    right: 30px;
                    font-size: 80px;
                    color: rgba(255, 255, 255, 0.1);
                }

                h3 {
                    z-index: 1;
                    transition: 0.5s;
                    font-size: 25px;
                    margin-bottom: 15px;
                }

                p {
                    z-index: 1;
                    transition: 0.5s;
                    width: 280px;
                    padding: 0px 20px;
                }

                a {
                    position: relative;
                    display: inline-block;
                    padding: 8px 20px;
                    background: $logo-color;
                    border-radius: 5px;
                    margin-top: 20px;
                    transition: 0.5s;

                    &:hover {
                        background: $white;
                        color: $black;
                    }
                }
            }
        }
    }
}
</style>
