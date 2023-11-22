<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-alert type="error" color="red lighten-2">
          <h2>404 - Page Not Found</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <v-btn color="primary" @click="$router.push('/')">Back to Home</v-btn>
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
