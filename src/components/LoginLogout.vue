<script setup lang="ts">
import { supabase, user } from '../supabase'

</script>

<template>
    <div class="ml-56 border-0 w-2/3">
        <div class="bg-light-grey">
            <h2 class=" text-center ml-28 w-1/2 font-aboreto text-xl">Compte</h2>
            <!-- <hr class="ml-32 mt-4 mb-8 h-0.5 w-32 bg-black" /> -->
            <div class="bg-gray-800 border">
                <h2 class="text-center text-2xl text-white">Bienvenue sur TIK TAK</h2>

                <div class="text-center text-white">
                    <button libelle="Authentification avec Google" class="border-2 mb-3 mt-28 rounded-sm w-96 h-14"
                        @pointerdown="supabase.auth.signIn({ provider: 'google' })">Google <br /></button>
                    <button libelle="Authentification avec Facebook" class="border-2 m-3 rounded-sm w-96 h-14"
                        @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">Facebook <br /></button>
                    <button libelle="Deconnexion" class="border-2 mt-3 mb-28 rounded-sm w-96 h-14"
                        @pointerdown="supabase.auth.signOut()">Déconnexion <br /></button>
                    <label id="status"></label>
                </div>
            </div>

        </div>
    </div>

</template>