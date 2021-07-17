<template>
    <v-card elevation="4" style="background-color:#272727;">
        <v-card-title>
            Gamemode settings
        </v-card-title>
        <v-card-text>
            <v-text-field :rules="[value => !!value || 'Required']" label="Server Name" v-model="settings.hostname" color="primary" outlined dense/>
            <v-switch v-model="settings.sv_lan" label="LAN Server" color="primary" dense/>
            <v-switch v-model="settings.p2p_enabled" label="P2P Server" color="primary" dense/>
            <v-checkbox v-model="settings.p2p_friendsonly" :disabled="!settings.p2p_enabled" label="P2P Friends Only" color="primary" dense/>
            <v-text-field v-for="id in filtered.Text" :key="id" :rules="[value => !!value || 'Required']" :label="settings.settings[id].text" v-model="settings.settings[id].Value" :placeholder="settings.settings[id].default" color="primary" outlined dense/>
            <v-slider v-for="id in filtered.Numeric" :key="id" v-model="settings.settings[id].Value" :max="2500" :label="settings.settings[id].text" class="align-center" color="primary" dense>
              <template v-slot:append>
                <v-text-field v-model="settings.settings[id].Value" class="mt-0 pt-0" type="number" style="width: 60px" color="primary" dense></v-text-field>
              </template>
            </v-slider>
            <v-switch v-for="id in filtered.CheckBox" :key="id" v-model="settings.settings[id].Value" :label="settings.settings[id].text" color="primary" dense/>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "MapSettings",
    props: ['settings'],
    computed: {
        filtered() {
            let filtered = {
                Text: [],
                Numeric: [],
                CheckBox: []
            }
            for (let id in this.settings.settings) {
                filtered[this.settings.settings[id].type].push(id)
            }
            return filtered
        }
    }
}
</script>