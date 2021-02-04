<template>
    <g class="ct-series ct-series-a">
        <path :d="path" class="ct-line"></path>

        <line x1="0" :y1="y1" x2="0" :y2="y1" class="ct-point"></line>

        <line x1="108" x2="108" :y1="y2"  :y2="y2" class="ct-point"></line>

        <text x = "206" :y = "y3-15" class="ct-value">{{value3}}</text>
        <line x1="216" x2="216" :y1="y3"  :y2="y3" class="ct-point"></line>

        <line x1="324" x2="324" :y1="y4" :y2="y4" class="ct-point"></line>

        <text x = "422" :y = "y5-15" class="ct-value">{{value4}}</text>
        <line x1="432" x2="432" :y1="y5" :y2="y5"  class="ct-point"></line>

        <line x1="540" x2="540" :y1="y6" :y2="y6"  class="ct-point"></line>

        <text x = "658" :y = "y7" class="ct-value">{{value5}} Views</text>
        <line x1="648" x2="648" :y1="y7" :y2="y7"  class="ct-point"></line>
    </g>
</template>

<script>
export default {
    props: {
        id: Number,
        y1: Number, 
        y2: Number,
        y3: Number,
        y4: Number,
        y5: Number,
        y6: Number,
        y7: Number,
        value: String,
    },
    data(){
        return{
            path: 'M0,188.646L108,141.49L216,200L324,110L432,110L540,100L648,20',
            value3: '1M',
            value4: '1.9M',
            value5: '2.8M'
        }
    },
    computed: {
        calculationPath(){
            this.path = "M0,"+this.y1+"L108,"+this.y2+"L216,"+this.y3+"L324,"+this.y4+"L432,"+this.y5+"L540,"+this.y6+"L648,"+this.y7;
        },
        calculationValue(){
            this.value3 = ((300-this.y3)/300)*3 + 'M';
            this.value4 = ((300-this.y5)/300)*3 + 'M';
            this.value5 = ((300-this.y7)/300)*3 + 'M';
        }
    },
    updated(){
        this.calculationPath;
        this.calculationValue;
    }
}
</script>
<style scoped>
    .ct-value{
        fill: #1da4b6;
        font-weight: 900;
    }

</style>