export default () => {
  const auth = useState<string | null>("auth", () => null)
  return {
    isLoggedIn: () => auth.value != null,
    auth: computed(() => auth.value && (a => ({ email: a[0], password: a[1] }))(auth.value.split(",", 2))),
    login(email: string, password: string) { auth.value = email + "," + password },
    logout() { auth.value = null }
  }
}
