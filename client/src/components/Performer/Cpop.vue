<template>
    <div class="topUsUk">
        <div class="row" style="margin: 0 0; di">
            <RPerformer/>
            <RPerformer/>
            <RPerformer/>
            <RPerformer/>
           
            <RPerformer/>
            <RPerformer/>
            <RPerformer/>
            <RPerformer/>
           
        </div>
    </div>
</template>

<script>
import RPerformer from '../Performer/RPerformer';

export default {
    components: {
        RPerformer
    }
}
</script>

<style scoped>
    .row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>