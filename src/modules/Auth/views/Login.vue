<script setup lang="ts">

import { ref, Ref } from 'vue'
import { useAuthStore } from '../store/auth'
import { useRules } from '../validation/composables/rules'

const { rules } = useRules()
const { login } = useAuthStore()

let valid: boolean = true

const form: Ref<any> = ref()

const authForm: Ref<LoginForm> = ref({
  email: '',
  password: '',
})

const validate = async () => {
  valid = await form.value.validate()

  if (valid) {
    return authorize(authForm.value)
  }
}

const authorize = async (form: LoginForm) => {
  await login(form)
}
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center fill-height">
      <v-row>
        <v-col cols="12" class="d-flex align-center offset-sm-2 offset-md-4 offset-lg-0" lg="4" md="4" sm="8">
          <v-card
            class="w-100 px-6 py-8"
            :title="$t('app.title')"
            variant="text"
          >
            <v-form
              v-model="valid"
              ref="form"
              lazy-validation
              @submit="validate"
            >
              <v-text-field
                v-model="authForm.email"
                :hint="$t('Auth.form.hints.email')"
                :label="$t('Auth.form.labels.email')"
                :rules="rules.email"
                type="email"
                variant="outlined"
                required
              />
              <br/>
              <v-text-field
                v-model="authForm.password"
                :hint="$t('Auth.form.hints.email')"
                :label="$t('Auth.form.labels.password')"
                :rules="rules.password"
                variant="outlined"
                type="password"
                required
              />
              <br/>
              <v-btn
                color="success"
                size="large"
                type="submit"
                block
              >
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
