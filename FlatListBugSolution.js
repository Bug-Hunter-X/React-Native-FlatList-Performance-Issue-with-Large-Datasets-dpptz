The solution is to use the `windowSize` prop in the FlatList component. This prop controls the number of items rendered at a time. By setting this prop to a smaller value, you can significantly improve performance. For example:

```javascript
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  windowSize={10} 
/>
```

Setting `windowSize` to 10 means that only 10 items are rendered at a time.  You can adjust this value based on your dataset size and performance requirements.  Consider using other optimization techniques, such as `initialNumToRender` and `removeClippedSubviews` for further performance enhancements.