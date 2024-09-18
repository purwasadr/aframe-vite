import Alpine from 'alpinejs';

Alpine.store('try', {
  text: 'Initial',

  test() {
    this.text = 'Coba berhasil!';
  },
});