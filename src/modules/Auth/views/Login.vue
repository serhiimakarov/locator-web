<script lang="ts">
export default {
  data: () => ({
    email: null,
    password: null,
    emailRules: []
  })
}
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <v-row>
        <v-col cols="12" class="d-flex align-center offset-sm-2 offset-md-4 offset-lg-0" lg="4" md="4" sm="8">
          <v-card title="Device Radar" variant="text" class="w-100 px-6 py-8">
            <v-form ref="authForm">
              <v-text-field v-model="email" type="email" :rules="emailRules" :label="$t('Auth.form.labels.email')"
                :hint="$t('Auth.form.hints.email')" variant="outlined" required />
              <v-text-field v-model="password" type="password" :label="$t('Auth.form.labels.password')"
                variant="outlined" :hint="$t('Auth.form.hints.email')" required />
              <v-btn color="success" size="large" type="submit" block>
                {{ $t('Auth.buttons.sign_in') }}
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="12" class="hidden-md-and-down fill-height offset-md-2" lg="6">
          <v-img height="h-100" src="@/assets/radar.png" contain />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
