<template>
  <v-dialog v-bind="$attrs" max-width="290" persistent>
    <v-card>
      <v-card-title class="headline">Are you sure?</v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="$emit('cancel')">Cancel</v-btn>
        <v-btn color="red" text @click="$emit('ok')">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
