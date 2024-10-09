<script setup>

</script>

<template>
    <div class="report">
        <img src="../assets/images/person-avatar.png" alt="person">
        <div class="report-content">
            <span>Report for</span>
            <div class="best-sales-title">
                <h4>Best</h4>
                <h4>Sales</h4>
            </div>
        </div>
    </div>
    <div class="period">
        <div class="period-content">
            <button>Daily</button>
            <button class="active">Weekly</button>
            <button>Monthly</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.report {
    width: 255px;
    height: 354px;
    border-radius: 15px;
    background-color: #5747EA;
    position: relative;
    top: -10px;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 138px;
        height: 145px;
        border-radius: 100%;
        object-fit: cover;
        object-position: right;
        border: 3px solid #FFF;
        box-shadow: 4px 7px 8px 0px #00000040;
    }

    .report-content {
        display: flex;
        flex-direction: column;
        margin: 15px 30px 0 30px;
        align-self: flex-start;

        span {
            font-size: 15px;
            font-weight: 400;
            line-height: 17.78px;
            text-align: left;
            color: #BBC0FF;
            margin-bottom: 10px;
            
        }

        .best-sales-title {
            h4 {
                font-family: Rubik;
                font-size: 40px;
                font-weight: 300;
                line-height: 47.4px;
                letter-spacing: 12px;
                text-align: left;
                margin: unset;
                color: #fff;
            }
        }

    }

}

.period {
    width: 255px;
    height: 164px;
    border-radius: 15px;
    background-color: #1C204B;
    position: relative;
    top: -40px;

    .period-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: 15px 35px;
        gap: 15px;
    }

    button {
        font-size: 18px;
        font-weight: 400;
        line-height: 21.33px;
        color: #7078C9;
        cursor: pointer;
        background-color: unset;
        border: unset;
        text-align: left;
        padding: 0;
    }

    .active {
        color: #FFF;
    }

}

@media (max-width: 768px) {
    .report {
        width: 100%;
        height: fit-content;
        flex-direction: row;
        padding: 20px 0;

        img {
            width: 64px;
            height: 64px;
        }

        .report-content {
            span {
                margin-bottom: 0;
            }

            .best-sales-title {
                display: flex;
                flex-direction: row;
                gap: 5px;

                h4 {
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 28.44px;
                    letter-spacing: 0 !important;
                }
            }
        }
    }

    .period {
        width: 100%;
        height: 100px;

        .period-content {
            flex-direction: row;
            align-items: center;
            gap: 45px;
        }
    }
}
</style>