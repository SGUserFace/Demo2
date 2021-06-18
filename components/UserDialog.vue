<template>
  <v-dialog v-bind="$attrs" max-width="600px" persistent>
    <v-card>
      <v-card-title class="headline">John Doe</v-card-title>
      <v-card-text>
        <div>(982)-012-4843</div>
        <div>john.doe@example.com</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="red" text @click="$emit('deleteUser')">Delete</v-btn>
        <v-spacer />
        <v-btn color="blue" text @click="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
