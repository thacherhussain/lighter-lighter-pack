##### Button and Functionality Options from the home screen prior to the todo app

    <Container contentContainerstyle={styles.main}>
      <Content contentContainerstyle={styles.mainCenter}>
        <Content padder>
          <Text style={styles.text}>Here is some text</Text>
          <Button onPress={showAlert}>
            <Text style={{textAlign: 'center'}}>Click Me!</Text>
          </Button>
        </Content>
      </Content>
      <AddButton />
    </Container>

const styles = StyleSheet.create({
main: {
  flex:1,
  flexDirection:'column',
  justifyContent:'center'
},
mainCenter: {
  flexDirection:'row',
  justifyContent:'center'
},
text: {
  color: '#0F7173',
  fontWeight: 'bold',
  fontSize: 30,
  padding: 50,
},
});
