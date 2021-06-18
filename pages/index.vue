<template>
  <v-app>
    <v-main>
      <v-btn @click="dialogs.user = true">Show User</v-btn>
      <user-dialog v-model="dialogs.user" @deleteUser="dialogs.delete = true" @close="dialogs.user = false"></user-dialog>
      <delete-dialog v-model="dialogs.delete" @ok="dialogs.delete = false, dialogs.user = false" @cancel="dialogs.delete = false"></delete-dialog>
    </v-main>
  </v-app>
</template>

<script>
  import UserDialog from '@/components/UserDialog'
  import DeleteDialog from '@/components/DeleteDialog'

  export default {
    name: 'App',
    components: {
      UserDialog, DeleteDialog
    },
    data() {
      return {
        dialogs: {
          user: false,
          delete: false
        }
      }
    }
  }
</script>
