<template>
    <div>
        <!-- <h1>Dogs for Adoption</h1>
        <b-table striped hover :items="dogs">
            <template v-slot:cell(name)="data">
                <router-link :to="`/pets/dogs/${data.index}`">
                    {{ data.value }}
                </router-link>
            </template>
        </b-table> -->
        <PetTable 
            species="dogs"
            :pets="dogs"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
    components: {
        PetTable
    },
    data(){
        return {}
    },    
    computed:{
        ...mapState([
            'dogs'
        ])
    }
}
</script>