function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // React Native < 0.57에서는 부모 외부(outside of parent)의 오버플로우가 Android에서 작동X https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }

  function HomeIconWithBadge(props) {
    // React Context API, Redux, MobX 또는 event emitters와 같은 다른 방법으로 badgeCount를 전달
    return <IconWithBadge {...props} badgeCount={3} />;
  }