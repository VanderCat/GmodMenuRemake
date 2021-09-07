<template>
    <v-card max-height="152" min-height="152">
        <div class="d-flex flex-no-wrap justify-space-between" style="oveflow-y:hidden;max-height:100%;">
            <div>
                <v-avatar
                    class="ma-3"
                    size="128"
                    tile
                >
                    <v-img lazy-src="https://steamuserimages-a.akamaihd.net/ugc/1687149336820973357/75E9125CC52702D11ABB77A4994D3D27DE600563/?imw=128&imh=128&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" src="https://steamuserimages-a.akamaihd.net/ugc/1687149336820973357/75E9125CC52702D11ABB77A4994D3D27DE600563/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"></v-img>
                </v-avatar>
            </div>
            <div >
                <v-card-title class="text-h5">Coach and Ellis pointing [MEME DUPE]</v-card-title>
                <v-card-text>
                    <div>This is "Two Soyjaks Pointing" meme recreation in gmod with l4d2 ragdolls, do with this whatever you want, YES you can still pose them and mess up their faces THEY ARE YOURS FOR FREE and lighting you can do by yourself.</div>
                    <div>Have fun! </div>
                    <div>Gmod screenshot: https://steamcommunity.com/sharedfiles/filedetails/?id=2571620911 </div>

                    <div>!REQUIRES LEFT 4 DEAD 2 MOUNTED!</div>
                    <div>"0" numpad key for Camera view</div>
                </v-card-text>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "Addon",
    props: ["name", "wsid", "state"],
    created() {
        
    }
}
</script>

<style lang="scss">
.addonContainer {
    padding: 8px;
}
</style>
